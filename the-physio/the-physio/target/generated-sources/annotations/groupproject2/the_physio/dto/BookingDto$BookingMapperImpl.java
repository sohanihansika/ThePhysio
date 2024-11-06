package groupproject2.the_physio.dto;

import groupproject2.the_physio.dto.BookingDto.BookingMapper;
import groupproject2.the_physio.dto.BookingDto.BookingRequest;
import groupproject2.the_physio.dto.BookingDto.BookingResponse;
import groupproject2.the_physio.entity.Booking;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-06T10:42:12+0530",
    comments = "version: 1.4.2.Final, compiler: Eclipse JDT (IDE) 3.40.0.z20241023-1306, environment: Java 17.0.13 (Eclipse Adoptium)"
)
public class BookingDto$BookingMapperImpl implements BookingMapper {

    @Override
    public Booking fromRequestToEntity(BookingRequest bookingRequest) {
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
    public BookingResponse fromEntityToResponse(Booking bookingEntity) {
        if ( bookingEntity == null ) {
            return null;
        }

        BookingResponse bookingResponse = new BookingResponse();

        bookingResponse.setId( bookingEntity.getId() );
        bookingResponse.setPhysioId( bookingEntity.getPhysioId() );
        bookingResponse.setUserId( bookingEntity.getUserId() );
        bookingResponse.setDate( bookingEntity.getDate() );
        bookingResponse.setTimeslot( bookingEntity.getTimeslot() );
        bookingResponse.setPaymentStatus( bookingEntity.getPaymentStatus() );

        return bookingResponse;
    }
}
