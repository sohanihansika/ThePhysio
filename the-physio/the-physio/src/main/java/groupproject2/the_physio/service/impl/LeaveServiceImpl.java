package groupproject2.the_physio.service.impl;

import groupproject2.the_physio.dto.LeaveDto;
import groupproject2.the_physio.entity.Leave;
import groupproject2.the_physio.repository.LeaveRepo;
import groupproject2.the_physio.service.LeaveService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class LeaveServiceImpl implements LeaveService {
    private final LeaveRepo leaveRepo;

    public LeaveServiceImpl(LeaveRepo leaveRepo) {
        this.leaveRepo = leaveRepo;
    }

    @Override
    public List<Leave> findAllLeave() {
        return leaveRepo.findAll();
    }

    @Override
    public Optional<Leave> findById(Long id) {
        return leaveRepo.findById(id);
    }

    @Override
    public Leave saveLeave(Leave leaveEntity) {
        return addLeave(leaveEntity);
    }

    @Override
    public Leave updateLeave(Leave leaveEntity ,Long id) {
        return leaveRepo.save(leaveEntity);
    }

    @Override
    public void deleteLeave(Long id) {
        leaveRepo.deleteById(id);
    }

    @Override
    public LeaveDto.LeaveResponse saveLeave(LeaveDto.LeaveRequest leaveRequest) {
        Leave leave = LeaveDto.LeaveMapper.INSTANCE.fromRequestToEntity((LeaveDto.LeaveRequest) leaveRequest);
        Leave savedEntity = leaveRepo.save(leave);
        return LeaveDto.LeaveMapper.INSTANCE.fromEntityToResponse(savedEntity);
    }

    @Override
    public LeaveDto.LeaveResponse updateLeave(LeaveDto.LeaveRequest leaveRequest, Long id) {
        Optional<Leave> existingLeave = findById(id);
        if (!existingLeave.isPresent()) {
            throw new RuntimeException("Leave Id " + id + " Not Found!");
        }

        Leave leave = LeaveDto.LeaveMapper.INSTANCE.fromRequestToEntity((LeaveDto.LeaveRequest) leaveRequest);
        leave.setId(id); // Ensure the ID is set for updating
        Leave updatedEntity = leaveRepo.save(leave);
        return LeaveDto.LeaveMapper.INSTANCE.fromEntityToResponse(updatedEntity);
    }

    private Leave addLeave(Leave leave) {
        // Get the year from the leave date
        LocalDate leaveDate = leave.getDate().toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDate();
        int year = leaveDate.getYear();

        // Get the start and end of the year
        LocalDate startOfYear = LocalDate.of(year, 1, 1);
        LocalDate endOfYear = LocalDate.of(year, 12, 31);

        // Convert LocalDate to Date
        Date startDate = Date.from(startOfYear.atStartOfDay(ZoneId.systemDefault()).toInstant());
        Date endDate = Date.from(endOfYear.atStartOfDay(ZoneId.systemDefault()).toInstant());

        // Count existing leaves for the physio within the current year
        List<Leave> existingLeaves = leaveRepo.findByPhysioIdAndDateBetween(
                leave.getPhysioId(),
                startDate,
                endDate
        );

        // Check if the number of existing leaves exceeds the annual limit
        if (existingLeaves.size() >= 14) {
            String errorMessage = String.format("Leave count for this year exceeded for physio ID: %d", leave.getPhysioId());
            // Log the error message
            System.err.println(errorMessage);
            // Throw an exception with the error message
            throw new RuntimeException(errorMessage);
        }

        // Check if there's already a leave for the same day
        List<Leave> leaveOnSameDay = leaveRepo.findByPhysioIdAndDate(
                leave.getPhysioId(),
                leave.getDate()
        );

        if (!leaveOnSameDay.isEmpty()) {
            String errorMessage = String.format("A leave for this date already exists for physio ID: %d", leave.getPhysioId());
            // Log the error message
            System.err.println(errorMessage);
            // Throw an exception with the error message
            throw new RuntimeException(errorMessage);
        }

        // Set the count (next available slot)
        leave.setCount(existingLeaves.size() + 1);

        // Save the leave and return it
        return leaveRepo.save(leave);
    }
}
