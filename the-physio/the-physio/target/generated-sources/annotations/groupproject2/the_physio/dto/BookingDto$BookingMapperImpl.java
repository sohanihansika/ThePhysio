package groupproject2.the_physio.dto;

import groupproject2.the_physio.entity.Booking;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-03T00:48:13+0530",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.40.0.z20241112-1021, environment: Java 17.0.13 (Eclipse Adoptium)"
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
