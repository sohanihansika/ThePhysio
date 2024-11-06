package groupproject2.the_physio.controller;

import groupproject2.the_physio.service.EmailService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;




    @RestController
    @RequestMapping("/mail")
    public class EmailSendController {
        private EmailService emailService;

        public EmailSendController(EmailService emailService) {
            this.emailService = emailService;
        }

        @PostMapping("/send")
        public String sendMail( String to, String[] cc, String subject, String body) {
            return emailService.sendMail( to, cc, subject, body);
        }


    }


