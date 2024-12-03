package groupproject2.the_physio.dto;

import groupproject2.the_physio.entity.Booking;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-06T13:24:21+0530",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
public class BookingDto$BookingMapperImpl implements BookingDto.BookingMapper {

    @Override
    public Booking fromRequestToEntity(BookingDto.BookingRequest bookingRequest) {
        if ( bookingRequest == null ) {
            return null;
        }

        Booking booking = new Booking();

        booking.setPhysioId( bookingRequest.getPhysioId() );
        booking.setUserId( bookingRequest.getUserId() );
        booking.setDate( bookingRequest.getDate() );
        booking.setTimeslot( bookingRequest.getTimeslot() );
        booking.setPaymentStatus( bookingRequest.getPaymentStatus() );

        return booking;
    }

    @Override
    public BookingDto.BookingResponse fromEntityToResponse(Booking bookingEntity) {
        if ( bookingEntity == null ) {
            return null;
        }

        BookingDto.BookingResponse bookingResponse = new BookingDto.BookingResponse();

        bookingResponse.setId( bookingEntity.getId() );
        bookingResponse.setPhysioId( bookingEntity.getPhysioId() );
        bookingResponse.setUserId( bookingEntity.getUserId() );
        bookingResponse.setDate( bookingEntity.getDate() );
        bookingResponse.setTimeslot( bookingEntity.getTimeslot() );
        bookingResponse.setPaymentStatus( bookingEntity.getPaymentStatus() );

        return bookingResponse;
    }
}
