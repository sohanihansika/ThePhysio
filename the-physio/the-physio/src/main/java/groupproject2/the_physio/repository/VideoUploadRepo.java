package groupproject2.the_physio.repository;

        import groupproject2.the_physio.entity.VideoUpload;
        import org.springframework.data.jpa.repository.JpaRepository;

public interface VideoUploadRepo extends JpaRepository<VideoUpload, Long> {
}
