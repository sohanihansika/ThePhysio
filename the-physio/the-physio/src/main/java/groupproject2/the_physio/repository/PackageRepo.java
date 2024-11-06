package groupproject2.the_physio.repository;
import groupproject2.the_physio.entity.Package;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageRepo extends JpaRepository<Package,Long> {

       //custome quary

}
