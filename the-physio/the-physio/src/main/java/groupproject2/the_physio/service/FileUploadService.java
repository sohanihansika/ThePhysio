
        package groupproject2.the_physio.service;


import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;

@Service
public class FileUploadService {

    public void saveFile(MultipartFile file) throws IOException {
        // Define the path where the file will be stored
        String filePath = "C:/Users/Hasini/AppData/Local/Temp/tomcat.8082.12900808366655650346/work/Tomcat/localhost/ROOT/ThePhysio/frontend/src/assets/";

        // Create a File object for the target directory
        File dir = new File(filePath);

        // Check if the directory exists, and create it if not
        if (!dir.exists()) {
            dir.mkdirs(); // This will create the directory and any missing parent directories
        }

        // Define the destination file where the uploaded file will be saved
        File destination = new File(filePath + file.getOriginalFilename());

        // Transfer the uploaded file to the destination
        file.transferTo(destination);
    }
}
