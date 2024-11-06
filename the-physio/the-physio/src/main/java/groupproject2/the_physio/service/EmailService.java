package groupproject2.the_physio.service;

import org.springframework.web.multipart.MultipartFile;

public interface EmailService {
    String sendMail( String to,String[] cc, String subject, String body);


}
