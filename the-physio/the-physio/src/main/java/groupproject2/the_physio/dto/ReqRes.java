package groupproject2.the_physio.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import groupproject2.the_physio.entity.OurUsers;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReqRes {

    private int statusCode;
    private String error;
    private String message;
    private String token;
    private String refreshToken;
    private String expirationTime;
    private String name;
    private LocalDateTime added_date;
    private String role;
    private String email;
    private String contact_no;
    private String address;
    private String password;
    private OurUsers ourUsers;
    private List<OurUsers> ourUsersList;


}
