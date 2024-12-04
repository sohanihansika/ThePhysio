package groupproject2.the_physio.controller;

        import groupproject2.the_physio.service.FileUploadService;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.*;
        import org.springframework.web.multipart.MultipartFile;
        import org.springframework.http.HttpStatus;

        import java.io.IOException;

@RestController
@RequestMapping("/upload")
public class FileUploadController {

    @Autowired
    private groupproject2.the_physio.service.FileUploadService fileUploadService;

    @PostMapping("/save")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            fileUploadService.saveFile(file);
            return ResponseEntity.ok("File uploaded successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File upload failed");
        }
    }
}
