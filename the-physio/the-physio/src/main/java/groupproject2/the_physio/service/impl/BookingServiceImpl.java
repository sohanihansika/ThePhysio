package groupproject2.the_physio.service.impl;

import groupproject2.the_physio.dto.BookingDto;
import groupproject2.the_physio.dto.ReqRes;
import groupproject2.the_physio.entity.Booking;
import groupproject2.the_physio.entity.OurUsers;
import groupproject2.the_physio.repository.BookingRepo;
import groupproject2.the_physio.service.BookingService;
import groupproject2.the_physio.service.EmailService;
import groupproject2.the_physio.service.UsersManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    private final BookingRepo bookingRepository;

    @Autowired
    private EmailService emailService;
    @Autowired
    private UsersManagementService usersManagementService;

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
        // Directly save the Booking entity
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
    public String saveBookingWithEmail(BookingDto.BookingRequest bookingRequest) {
        // Convert DTO to Entity
        Booking bookingEntity = BookingDto.BookingMapper.INSTANCE.fromRequestToEntity(bookingRequest);
        ReqRes userDto = usersManagementService.getUsernameById(bookingRequest.getUserId()); // Replace with actual method to fetch user details
//        String to = userDto.getEmail();
        String username = userDto.getName();
        // Extract user's email
        String to = "hewa@gmail.com"; // Replace with actual user's email address

        // Compose Email
        String subject = "Booking Confirmation - The Physio Clinic";
        String body = username + ",\n\n" +
                "Your booking has been confirmed with the following details:\n\n" +

                "Booking Date: " + bookingRequest.getDate() + "\n" +
                "userid"+bookingRequest.getUserId()+"\n"+
                "Physio: " + bookingRequest.getPhysioId() + "\n\n" +
                "Time: " + bookingRequest.getTimeslot() + "\n\n" +
                "Thank you for choosing The Physio Clinic. We look forward to serving you.\n\n" +
                "Best regards,\n" +
                "The Physio Clinic Team";
        String[] cc = new String[]{"hasini@gmail.com"};

        try {
            // Log before sending email
            System.out.println("Attempting to send email to: " + to);

            // Send Email
            emailService.sendMail(to, cc, subject, body);
            System.out.println("Email sent successfully");

            // If email is sent successfully, proceed to save the booking
            Booking savedEntity = bookingRepository.save(bookingEntity);

            // Prepare the response DTO
            BookingDto.BookingResponse bookingResponse = BookingDto.BookingMapper.INSTANCE.fromEntityToResponse(savedEntity);

            // Return the response
            System.out.println("Booking saved successfully");
            return "Booking saved and email sent successfully.";

        } catch (MailException mailException) {
            // Handle email sending failure
            System.out.println("Failed to send booking confirmation email: " + mailException.getMessage());

            // Throw an exception to notify the caller that the booking was not saved
            throw new RuntimeException("Booking was not saved because the confirmation email could not be sent.");
        }
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
