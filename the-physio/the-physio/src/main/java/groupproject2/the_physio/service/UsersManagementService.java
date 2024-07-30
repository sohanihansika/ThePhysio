package groupproject2.the_physio.service;

import groupproject2.the_physio.dto.ReqRes;
import groupproject2.the_physio.entity.OurUsers;
import groupproject2.the_physio.repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class UsersManagementService {

    @Autowired
    private UsersRepo usersRepo;
    @Autowired
    private JWTUtils jwtUtils;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public ReqRes userRegister(ReqRes userRegistrationRequest){
        ReqRes resp = new ReqRes();


        try {
            if (userRegistrationRequest.getPassword() == null || userRegistrationRequest.getPassword().isEmpty()) {
                resp.setStatusCode(400);
                resp.setMessage("Password cannot be null or empty");
                return resp;
            }
            Optional<OurUsers> existingUserByEmail = usersRepo.findByEmail(userRegistrationRequest.getEmail());
            if (existingUserByEmail.isPresent()) {
                resp.setStatusCode(400);
                resp.setMessage("Email is already Exist!");
                return resp;}

            OurUsers ourUser = new OurUsers();
            ourUser.setEmail(userRegistrationRequest.getEmail());
            ourUser.setContact_no(userRegistrationRequest.getContact_no());
            ourUser.setAddress(userRegistrationRequest.getAddress());
            ourUser.setAdded_date(LocalDateTime.now());
            ourUser.setRole("USER");
            ourUser.setName(userRegistrationRequest.getName());
            ourUser.setPassword(passwordEncoder.encode(userRegistrationRequest.getPassword()));
            OurUsers ourUsersResult = usersRepo.save(ourUser);

            if (ourUsersResult.getId()>0) {
                resp.setOurUsers((ourUsersResult));
                resp.setMessage("User Saved Successfully");
                resp.setStatusCode(200);
            }

        }catch (Exception e){
            resp.setStatusCode(500);
            resp.setError(e.getMessage());
        }
        return resp;
    }

    public ReqRes empRegister(ReqRes empRegistrationRequest){
        ReqRes resp = new ReqRes();

        try {
            if (empRegistrationRequest.getPassword() == null || empRegistrationRequest.getPassword().isEmpty()) {
                resp.setStatusCode(400);
                resp.setMessage("Password cannot be null or empty");
                return resp;
            }
            Optional<OurUsers> existingUserByEmail = usersRepo.findByEmail(empRegistrationRequest.getEmail());
            if (existingUserByEmail.isPresent()) {
                resp.setStatusCode(400);
                resp.setMessage("Email is already Exist!");
                return resp;}

            OurUsers ourUser = new OurUsers();
            ourUser.setEmail(empRegistrationRequest.getEmail());
            ourUser.setContact_no(empRegistrationRequest.getContact_no());
            ourUser.setAddress(empRegistrationRequest.getAddress());
            ourUser.setName(empRegistrationRequest.getName());
            ourUser.setRole(empRegistrationRequest.getRole());
            ourUser.setAdded_date(LocalDateTime.now());
            ourUser.setPassword(passwordEncoder.encode(empRegistrationRequest.getPassword()));
            OurUsers ourUsersResult = usersRepo.save(ourUser);
            if (ourUsersResult.getId()>0) {
                resp.setOurUsers((ourUsersResult));
                resp.setMessage("Employee Saved Successfully");
                resp.setStatusCode(200);
            }

        }catch (Exception e){
            resp.setStatusCode(500);
            resp.setError(e.getMessage());
        }
        return resp;
    }


    public ReqRes login(ReqRes loginRequest){
        ReqRes response = new ReqRes();
        try {
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),
                            loginRequest.getPassword()));
            var user = usersRepo.findByEmail(loginRequest.getEmail()).orElseThrow();
            var jwt = jwtUtils.generateToken(user);
            var refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), user);
            response.setStatusCode(200);
            response.setToken(jwt);
            response.setRole(user.getRole());
            response.setRefreshToken(refreshToken);
            response.setExpirationTime("24Hrs");
            response.setMessage("Successfully Logged In");

        }catch (Exception e){
            response.setStatusCode(500);
            response.setMessage(e.getMessage());
        }
        return response;
    }


    public ReqRes refreshToken(ReqRes refreshTokenReqiest) {
        ReqRes response = new ReqRes();
        try {
            String ourEmail = jwtUtils.extractUsername(refreshTokenReqiest.getToken());
            OurUsers users = usersRepo.findByEmail(ourEmail).orElseThrow();
            if (jwtUtils.isTokenValid(refreshTokenReqiest.getToken(), users)) {
                var jwt = jwtUtils.generateToken(users);
                response.setToken(jwt);
                response.setRefreshToken(refreshTokenReqiest.getToken());
                response.setExpirationTime("24Hr");
                response.setMessage("Successfully Refreshed Token");
            }
            response.setStatusCode(200);
            return response;

        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage(e.getMessage());
            return response;
        }
    }

    public ReqRes getAllUsers() {
        ReqRes reqRes = new ReqRes();

        try {
            List<OurUsers> result = usersRepo.findAll();
            if (!result.isEmpty()){
                reqRes.setOurUsersList(result);
                reqRes.setStatusCode(200);
                reqRes.setMessage("Successful");
            } else {
                reqRes.setStatusCode(404);
                reqRes.setMessage("No Users Found");
            }
            return reqRes;
        } catch (Exception e) {
            reqRes.setStatusCode(500);
            reqRes.setMessage("Error occured: " + e.getMessage());
            return reqRes;
        }
    }

    public ReqRes getUsersById(int id) {
        ReqRes reqRes = new ReqRes();
        try {
            OurUsers usersById = usersRepo.findById(id).orElseThrow(() -> new RuntimeException("User Not Found"));
            reqRes.setOurUsers(usersById);
            reqRes.setStatusCode(200);
            reqRes.setMessage("Users with id '" + id + "' found successfully");
        } catch (Exception e) {
            reqRes.setStatusCode(500);
            reqRes.setMessage("Error occured: " + e.getMessage());
        }
        return reqRes;
    }

    public ReqRes deleteUser(Integer userId) {
        ReqRes reqRes = new ReqRes();
        try {
            Optional<OurUsers> userOptional = usersRepo.findById(userId);
            if (userOptional.isPresent()) {
                usersRepo.deleteById(userId);
                reqRes.setStatusCode(200);
                reqRes.setMessage("User deleted successfully");
            } else {
                reqRes.setStatusCode(404);
                reqRes.setMessage("User not found for deletion");
            }
        } catch (Exception e) {
            reqRes.setStatusCode(500);
            reqRes.setMessage("Error occurred while deleting user: " + e.getMessage());
        }
        return reqRes;
    }

    public ReqRes updateUser(Integer userId, OurUsers updatedUser) {
        ReqRes reqRes = new ReqRes();
        try {
            Optional<OurUsers> userOptional = usersRepo.findById(userId);
            if (userOptional.isPresent()) {
                OurUsers existingUser = userOptional.get();

                // Check if the email has changed
                boolean emailChanged = !existingUser.getEmail().equals(updatedUser.getEmail());

                // If email has changed, check if the new email is already taken by another user
                if (emailChanged) {
                    Optional<OurUsers> userWithSameEmail = usersRepo.findByEmail(updatedUser.getEmail());
                    if (userWithSameEmail.isPresent() && !userWithSameEmail.get().getId().equals(userId)) {
                        reqRes.setStatusCode(400);
                        reqRes.setMessage("Email already in use by another user");
                        return reqRes;
                    }
                }

                existingUser.setEmail(updatedUser.getEmail());
                existingUser.setName(updatedUser.getName());
                existingUser.setAddress(updatedUser.getAddress());
                existingUser.setContact_no(updatedUser.getContact_no());


                OurUsers savedUser = usersRepo.save(existingUser);
                reqRes.setOurUsers(savedUser);
                reqRes.setStatusCode(200);
                reqRes.setMessage("User updated successfully");
            } else {
                reqRes.setStatusCode(404);
                reqRes.setMessage("User not found for update");
            }
        } catch (Exception e) {
            reqRes.setStatusCode(500);
            reqRes.setMessage("Error occurred while updating user: " + e.getMessage());
        }
        return reqRes;
    }


    public ReqRes getMyProfile(String email){
        ReqRes reqRes = new ReqRes();
        try {
            Optional<OurUsers> userOptional = usersRepo.findByEmail(email);
            if (userOptional.isPresent()) {
                reqRes.setOurUsers(userOptional.get());
                reqRes.setStatusCode(200);
                reqRes.setMessage("successful");
            } else {
                reqRes.setStatusCode(404);
                reqRes.setMessage("User not found for update");
            }

        }catch (Exception e){
            reqRes.setStatusCode(500);
            reqRes.setMessage("Error occurred while getting user info: " + e.getMessage());
        }
        return reqRes;

    }

    public ReqRes findAllPhysios() {
        ReqRes reqRes = new ReqRes();

        try {
            List<OurUsers> result = usersRepo.findAllByRole("PHYSIO");
            if (!result.isEmpty()){
                reqRes.setOurUsersList(result);
                reqRes.setStatusCode(200);
                reqRes.setMessage("Successful");
            } else {
                reqRes.setStatusCode(404);
                reqRes.setMessage("No Physiotherapists Found");
            }
            return reqRes;
        } catch (Exception e) {
            reqRes.setStatusCode(500);
            reqRes.setMessage("Error occurred: " + e.getMessage());
            return reqRes;
        }
    }

    public ReqRes empUpdate(Integer userId, OurUsers updatedEmp) {
        ReqRes reqRes = new ReqRes();
        try {
            Optional<OurUsers> userOptional = usersRepo.findById(userId);
            if (userOptional.isPresent()) {
                OurUsers existingUser = userOptional.get();

                // Check if the email has changed
                boolean emailChanged = !existingUser.getEmail().equals(updatedEmp.getEmail());

                // If email has changed, check if the new email is already taken by another user
                if (emailChanged) {
                    Optional<OurUsers> userWithSameEmail = usersRepo.findByEmail(updatedEmp.getEmail());
                    if (userWithSameEmail.isPresent() && !userWithSameEmail.get().getId().equals(userId)) {
                        reqRes.setStatusCode(400);
                        reqRes.setMessage("Email already in use by another user");
                        return reqRes;
                    }
                }

                // Update the fields
                existingUser.setEmail(updatedEmp.getEmail());
                existingUser.setName(updatedEmp.getName());
                existingUser.setRole(updatedEmp.getRole());
                existingUser.setAddress(updatedEmp.getAddress());
                existingUser.setContact_no(updatedEmp.getContact_no());

                OurUsers savedUser = usersRepo.save(existingUser);
                reqRes.setOurUsers(savedUser);
                reqRes.setStatusCode(200);
                reqRes.setMessage("Employee updated successfully");
            } else {
                reqRes.setStatusCode(404);
                reqRes.setMessage("Employee not found for update");
            }
        } catch (Exception e) {
            reqRes.setStatusCode(500);
            reqRes.setMessage("Error occurred while updating employee: " + e.getMessage());
        }
        return reqRes;
    }


}
