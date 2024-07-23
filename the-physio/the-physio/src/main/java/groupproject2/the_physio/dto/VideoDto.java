package groupproject2.the_physio.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VideoDto {
    private Integer id;
    private String tags;
    private String description;
    private String title;
    private Data addeddate;;
    @Setter
    private String videoName;
    //private Double duration;

}
