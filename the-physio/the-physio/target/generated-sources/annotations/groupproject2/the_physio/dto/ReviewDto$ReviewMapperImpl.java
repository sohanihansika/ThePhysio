package groupproject2.the_physio.dto;

import groupproject2.the_physio.entity.Review;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-29T15:22:41+0530",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
public class ReviewDto$ReviewMapperImpl implements ReviewDto.ReviewMapper {

    @Override
    public Review fromRequestToEntity(ReviewDto.ReviewRequest reviewRequest) {
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
    public ReviewDto.ReviewResponse fromEntityToResponse(Review reviewEntity) {
        if ( reviewEntity == null ) {
            return null;
        }

        ReviewDto.ReviewResponse reviewResponse = new ReviewDto.ReviewResponse();

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
