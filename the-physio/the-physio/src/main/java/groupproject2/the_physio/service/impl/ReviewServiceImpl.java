package groupproject2.the_physio.service.impl;

        import org.springframework.stereotype.Service;
        import groupproject2.the_physio.dto.ReviewDto;
        import groupproject2.the_physio.entity.Review;
        import groupproject2.the_physio.repository.ReviewRepo;
        import groupproject2.the_physio.service.ReviewService;

        import java.time.LocalDateTime;
        import java.time.ZoneId;
        import java.util.Date;
        import java.util.List;
        import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepo reviewRepository;

    public ReviewServiceImpl(ReviewRepo reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Override
    public List<Review> findAllReviews() {
        return reviewRepository.findAll();
    }

    @Override
    public Optional<Review> findById(Long id) {
        return reviewRepository.findById(id);
    }

    @Override
    public Review saveReview(Review reviewEntity) {
        return reviewRepository.save(reviewEntity);
    }

    @Override
    public Review updateReview(Review reviewEntity, Long id) {
        // Ensure the ID is set for updating
        reviewEntity.setId(id);
        return reviewRepository.save(reviewEntity);
    }

    @Override
    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }

    @Override
    public ReviewDto.ReviewResponse saveReview(ReviewDto.ReviewRequest reviewRequest) {
        Review reviewEntity = ReviewDto.ReviewMapper.INSTANCE.fromRequestToEntity(reviewRequest);

        // Set the created_date to the current date and time
        reviewEntity.setCreatedDate(Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant()));

        Review savedEntity = reviewRepository.save(reviewEntity);
        return ReviewDto.ReviewMapper.INSTANCE.fromEntityToResponse(savedEntity);
    }

    @Override
    public ReviewDto.ReviewResponse updateReview(ReviewDto.ReviewRequest reviewRequest, Long id) {
        Optional<Review> existingReview = findById(id);
        if (!existingReview.isPresent()) {
            throw new RuntimeException("Review Id " + id + " Not Found!");
        }

        Review reviewEntity = ReviewDto.ReviewMapper.INSTANCE.fromRequestToEntity(reviewRequest);
        reviewEntity.setId(id); // Ensure the ID is set for updating
        Review updatedEntity = reviewRepository.save(reviewEntity);
        return ReviewDto.ReviewMapper.INSTANCE.fromEntityToResponse(updatedEntity);
    }
}
