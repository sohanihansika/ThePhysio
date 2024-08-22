package groupproject2.the_physio.service.impl;

import org.springframework.stereotype.Service;




        import groupproject2.the_physio.dto.BookingDto;
        import groupproject2.the_physio.entity.Booking;
        import groupproject2.the_physio.repository.BookingRepo;
        import groupproject2.the_physio.service.BookingService;
        import org.springframework.stereotype.Service;

        import java.util.List;
        import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    private final BookingRepo bookingRepository;



    public BookingServiceImpl(BookingRepo bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @Override
    public List<Booking> findAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public Optional<Booking> findById(Long id) {
        return bookingRepository.findById(id);
    }

    @Override
    public Booking saveBooking(Booking bookingEntity) {
        return bookingRepository.save(bookingEntity);
    }

    @Override
    public Booking updateBooking(Booking bookingEntity) {
        return bookingRepository.save(bookingEntity);
    }

    @Override
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }

    @Override
    public BookingDto.BookingResponse saveBooking(BookingDto.BookingRequest bookingRequest) {
        Booking bookingEntity = BookingDto.BookingMapper.INSTANCE.fromRequestToEntity(bookingRequest);
        Booking savedEntity = bookingRepository.save(bookingEntity);
        return BookingDto.BookingMapper.INSTANCE.fromEntityToResponse(savedEntity);
    }

    @Override
    public BookingDto.BookingResponse updateBooking(BookingDto.BookingRequest bookingRequest, Long id) {
        Optional<Booking> existingBooking = findById(id);
        if (!existingBooking.isPresent()) {
            throw new RuntimeException("Booking Id " + id + " Not Found!");
        }

        Booking bookingEntity = BookingDto.BookingMapper.INSTANCE.fromRequestToEntity(bookingRequest);
        bookingEntity.setId(id); // Ensure the ID is set for updating
        Booking updatedEntity = bookingRepository.save(bookingEntity);
        return BookingDto.BookingMapper.INSTANCE.fromEntityToResponse(updatedEntity);
    }
}


