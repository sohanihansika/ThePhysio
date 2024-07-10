package groupproject2.the_physio.service;

import groupproject2.the_physio.dto.PhysioDto;

import java.util.List;

public interface PhysioService {

    PhysioDto createPhysio(PhysioDto physioDto);

    List<PhysioDto> getAllPhysios();

    PhysioDto getPhysioById(Long physioId);

    PhysioDto updatePhysio(Long physioId, PhysioDto updatedPhysio);

    void deletePhysio(Long physioId);
}
