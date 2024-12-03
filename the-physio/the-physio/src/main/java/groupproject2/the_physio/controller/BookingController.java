package groupproject2.the_physio.controller;


import groupproject2.the_physio.dto.BookingDto;
import groupproject2.the_physio.entity.Booking;
import groupproject2.the_physio.service.BookingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/booking")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping
    public List<Booking> findAllBookings() {
        return bookingService.findAllBookings();
    }

    @GetMapping("/{id}")
    public Optional<Booking> findBookingById(@PathVariable("id") Long id) {
        return bookingService.findById(id);
    }

    @PostMapping("/with-email")
    public String saveBookingWithEmail(@RequestBody BookingDto.BookingRequest bookingRequest) {
        return bookingService.saveBookingWithEmail(bookingRequest);
    }

    @PostMapping
    public Booking saveBooking(@RequestBody Booking bookingEntity) {
        return bookingService.saveBooking(bookingEntity);
    }


    @PutMapping
    public Booking updateBooking(@RequestBody Booking booking) {return bookingService.updateBooking(booking); }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable("id") Long id) {
        bookingService.deleteBooking(id);
    }

}