package groupproject2.the_physio.service.impl;

import groupproject2.the_physio.dto.EmployeeDto;
import groupproject2.the_physio.dto.PhysioDto;
import groupproject2.the_physio.entity.Employee;
import groupproject2.the_physio.entity.Physio;
import groupproject2.the_physio.exception.ResourceNotFoundException;
import groupproject2.the_physio.mapper.EmployeeMapper;
import groupproject2.the_physio.mapper.PhysioMapper;
import groupproject2.the_physio.repository.PhysioRepository;
import groupproject2.the_physio.service.PhysioService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PhysioServiceImpl implements PhysioService {

    private PhysioRepository physioRepository;
    @Override
    public PhysioDto createPhysio(PhysioDto physioDto){
        physioDto.setPassword(new BCryptPasswordEncoder().encode(physioDto.getPassword()));


       Physio physio = PhysioMapper.mapToPhysio(physioDto);
       Physio savedPhysio = physioRepository.save(physio);
       return PhysioMapper.mapToPhysioDto(savedPhysio);
    }

    @Override
    public PhysioDto getPhysioById(Long physioId) {
        Physio physio = physioRepository.findById(physioId)
                .orElseThrow(()->
                        new ResourceNotFoundException("Employee is not exist with given id : " + physioId));

        return PhysioMapper.mapToPhysioDto(physio) ;
    }
    @Override
    public List<PhysioDto> getAllPhysios() {
        List<Physio> physios = physioRepository.findAll();

        return physios.stream().map((physio) -> PhysioMapper.mapToPhysioDto(physio))
                .collect(Collectors.toList());
    }
    @Override
    public PhysioDto updatePhysio(Long physioId, PhysioDto updatedPhysio) {

        Physio physio = physioRepository.findById(physioId).orElseThrow(
                ()-> new ResourceNotFoundException("Employee is not exist with given id: " + physioId)
        );

        physio.setFirstName(updatedPhysio.getFirstName());
        physio.setLastName(updatedPhysio.getLastName());
        physio.setEmail(updatedPhysio.getEmail());
        physio.setPassword(updatedPhysio.getPassword());

        Physio updatedPhysioObj = physioRepository.save(physio);

        return PhysioMapper.mapToPhysioDto(updatedPhysioObj);
    }


    @Override
    public void deletePhysio(Long physioId) {

        Physio physio = physioRepository.findById(physioId).orElseThrow(
                ()-> new ResourceNotFoundException("Employee is not exist with given id: " + physioId)
        );

        physioRepository.deleteById(physioId);
    }

}