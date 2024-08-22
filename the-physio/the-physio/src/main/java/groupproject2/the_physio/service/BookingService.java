package groupproject2.the_physio.service;
import groupproject2.the_physio.dto.BookingDto;
import groupproject2.the_physio.entity.Booking;

import java.util.List;
import java.util.Optional;

public interface BookingService {
    List<Booking> findAllBookings();
    Optional<Booking> findById(Long id);
    Booking saveBooking(Booking Booking);
    Booking updateBooking(Booking Booking);
    void deleteBooking(Long id);

    // Using Request and Response with save and update booking
    BookingDto.BookingResponse saveBooking(BookingDto.BookingRequest bookingRequest);
    BookingDto.BookingResponse updateBooking(BookingDto.BookingRequest bookingRequest, Long id);
}

