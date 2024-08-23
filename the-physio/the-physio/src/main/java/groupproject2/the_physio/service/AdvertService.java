package groupproject2.the_physio.service;

import groupproject2.the_physio.dto.AdvertDto;
import groupproject2.the_physio.entity.Advert;

import java.util.List;
import java.util.Optional;

public interface AdvertService {
    List<Advert> findAllAdverts();
    Optional<Advert> findById(Long id);
    Advert saveAdvert(Advert advert);
    Advert updateAdvert(Advert advert);
    void deleteAdvert(Long id);

    // Using Request and Response with save and update advert
    AdvertDto.AdvertResponse saveAdvert(AdvertDto.AdvertRequest advertRequest);
    AdvertDto.AdvertResponse updateAdvert(AdvertDto.AdvertRequest advertRequest, Long id);
}
