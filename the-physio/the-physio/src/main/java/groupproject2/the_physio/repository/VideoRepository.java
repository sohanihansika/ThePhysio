package groupproject2.the_physio.repository;

import groupproject2.the_physio.entity.Video;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VideoRepository extends JpaRepository<Video, Integer> {
}
