package groupproject2.the_physio.service.impl;

import groupproject2.the_physio.dto.AdvertDto;
import groupproject2.the_physio.entity.Advert;
import groupproject2.the_physio.repository.AdvertRepo;
import groupproject2.the_physio.service.AdvertService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdvertServiceImpl implements AdvertService {

    private final AdvertRepo advertRepository;

    public AdvertServiceImpl(AdvertRepo advertRepository) {
        this.advertRepository = advertRepository;
    }

    @Override
    public List<Advert> findAllAdverts() {
        return advertRepository.findAll();
    }

    @Override
    public Optional<Advert> findById(Long id) {
        return advertRepository.findById(id);
    }

    @Override
    public Advert saveAdvert(Advert advertEntity) {
        return advertRepository.save(advertEntity);
    }

    @Override
    public Advert updateAdvert(Advert advertEntity) {
        return advertRepository.save(advertEntity);
    }

    @Override
    public void deleteAdvert(Long id) {
        advertRepository.deleteById(id);
    }

    @Override
    public AdvertDto.AdvertResponse saveAdvert(AdvertDto.AdvertRequest advertRequest) {
        Advert advertEntity = AdvertDto.AdvertMapper.INSTANCE.fromRequestToEntity(advertRequest);
        Advert savedEntity = advertRepository.save(advertEntity);
        return AdvertDto.AdvertMapper.INSTANCE.fromEntityToResponse(savedEntity);
    }

    @Override
    public AdvertDto.AdvertResponse updateAdvert(AdvertDto.AdvertRequest advertRequest, Long id) {
        Optional<Advert> existingAdvert = findById(id);
        if (!existingAdvert.isPresent()) {
            throw new RuntimeException("Advert Id " + id + " Not Found!");
        }

        Advert advertEntity = AdvertDto.AdvertMapper.INSTANCE.fromRequestToEntity(advertRequest);
        advertEntity.setId(id); // Ensure the ID is set for updating
        Advert updatedEntity = advertRepository.save(advertEntity);
        return AdvertDto.AdvertMapper.INSTANCE.fromEntityToResponse(updatedEntity);
    }
}
