package groupproject2.the_physio.controller;

import groupproject2.the_physio.entity.Advert;
import groupproject2.the_physio.service.AdvertService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/advert")
public class AdvertController {

    private final AdvertService advertService;

    public AdvertController(AdvertService advertService) {
        this.advertService = advertService;
    }

    @GetMapping
    public List<Advert> findAllAdverts() {
        return advertService.findAllAdverts();
    }

    @GetMapping("/{id}")
    public Optional<Advert> findAdvertById(@PathVariable("id") Long id) {
        return advertService.findById(id);
    }

    @PostMapping
    public ResponseEntity<Advert> saveAdvert(@RequestParam("userId") Long userId,
                                             @RequestParam("description") String description,
                                             @RequestParam("title") String title,
                                             @RequestParam("video") MultipartFile videoFile) throws IOException {
        Advert advert = new Advert();
        advert.setUserId(userId);
        advert.setDescription(description);
        advert.setTitle(title);
        advert.setAddedDate(LocalDateTime.now());
        advert.setVideo(videoFile.getBytes()); // Directly set video data as byte array

        Advert savedAdvert = advertService.saveAdvert(advert);
        return ResponseEntity.ok(savedAdvert);
    }

    @PutMapping("/{id}")
    public Advert updateAdvert(@PathVariable("id") Long id,
                               @RequestParam("userId") Long userId,
                               @RequestParam("description") String description,
                               @RequestParam("title") String title,
                               @RequestParam("video") MultipartFile videoFile) throws IOException {
        Optional<Advert> existingAdvert = advertService.findById(id);
        if (existingAdvert.isPresent()) {
            Advert advert = existingAdvert.get();
            advert.setUserId(userId);
            advert.setDescription(description);
            advert.setTitle(title);
            advert.setAddedDate(LocalDateTime.now());

            // Convert the video file to a byte array and set it to the entity
            advert.setVideo(videoFile.getBytes());

            return advertService.saveAdvert(advert);
        } else {
            throw new RuntimeException("Advert Id " + id + " Not Found!");
        }
    }

    @DeleteMapping("/{id}")
    public void deleteAdvert(@PathVariable("id") Long id) {
        advertService.deleteAdvert(id);
    }
}
