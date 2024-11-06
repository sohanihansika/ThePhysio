package groupproject2.the_physio.service;

        import groupproject2.the_physio.dto.ReviewDto;
        import groupproject2.the_physio.entity.Review;

        import java.util.List;
        import java.util.Optional;

public interface ReviewService {
    List<Review> findAllReviews();
    Optional<Review> findById(Long id);
    Review saveReview(Review review);
    Review updateReview(Review review, Long id);
    void deleteReview(Long id);

    // Using Request and Response with save and update review
    ReviewDto.ReviewResponse saveReview(ReviewDto.ReviewRequest reviewRequest);
    ReviewDto.ReviewResponse updateReview(ReviewDto.ReviewRequest reviewRequest, Long id);
}
