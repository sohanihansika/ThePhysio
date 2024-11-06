package groupproject2.the_physio.dto;

import groupproject2.the_physio.dto.ReviewDto.ReviewMapper;
import groupproject2.the_physio.dto.ReviewDto.ReviewRequest;
import groupproject2.the_physio.dto.ReviewDto.ReviewResponse;
import groupproject2.the_physio.entity.Review;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-06T10:39:28+0530",
    comments = "version: 1.4.2.Final, compiler: Eclipse JDT (IDE) 3.40.0.z20241023-1306, environment: Java 17.0.13 (Eclipse Adoptium)"
)
public class ReviewDto$ReviewMapperImpl implements ReviewMapper {

    @Override
    public Review fromRequestToEntity(ReviewRequest reviewRequest) {
        if ( reviewRequest == null ) {
            return null;
        }

        Review review = new Review();

        review.setCategory( reviewRequest.getCategory() );
        review.setPhysioId( reviewRequest.getPhysioId() );
        review.setCoachId( reviewRequest.getCoachId() );
        review.setRate( reviewRequest.getRate() );
        review.setComment( reviewRequest.getComment() );

        return review;
    }

    @Override
    public ReviewResponse fromEntityToResponse(Review reviewEntity) {
        if ( reviewEntity == null ) {
            return null;
        }

        ReviewResponse reviewResponse = new ReviewResponse();

        reviewResponse.setId( reviewEntity.getId() );
        reviewResponse.setCategory( reviewEntity.getCategory() );
        reviewResponse.setPhysioId( reviewEntity.getPhysioId() );
        reviewResponse.setCoachId( reviewEntity.getCoachId() );
        reviewResponse.setRate( reviewEntity.getRate() );
        reviewResponse.setComment( reviewEntity.getComment() );
        reviewResponse.setCreatedDate( reviewEntity.getCreatedDate() );

        return reviewResponse;
    }
}
