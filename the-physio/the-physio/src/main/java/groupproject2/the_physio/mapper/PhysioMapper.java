package groupproject2.the_physio.mapper;

import groupproject2.the_physio.dto.PhysioDto;
import groupproject2.the_physio.entity.Physio;

public class PhysioMapper {

    public static PhysioDto mapToPhysioDto (Physio physio){
        return new PhysioDto(
                physio.getId(),
                physio.getFirstName(),
                physio.getLastName(),
                physio.getEmail(),
                physio.getPassword()
        );
    }

    public static Physio mapToPhysio (PhysioDto physioDto){
        return new Physio(
                physioDto.getId(),
                physioDto.getFirstName(),
                physioDto.getLastName(),
                physioDto.getEmail(),
                physioDto.getPassword()
        );
    }
}
