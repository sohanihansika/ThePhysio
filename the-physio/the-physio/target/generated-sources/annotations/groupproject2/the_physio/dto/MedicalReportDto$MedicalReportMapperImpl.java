package groupproject2.the_physio.dto;

import groupproject2.the_physio.entity.MedicalReport;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-03T00:48:13+0530",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.40.0.z20241112-1021, environment: Java 17.0.13 (Eclipse Adoptium)"
)
public class MedicalReportDto$MedicalReportMapperImpl implements MedicalReportDto.MedicalReportMapper {

    @Override
    public MedicalReport fromRequestToEntity(MedicalReportDto.MedicalReportRequest medicalReportRequest) {
        if ( medicalReportRequest == null ) {
            return null;
        }

        MedicalReport medicalReport = new MedicalReport();

        medicalReport.setPhysioId( medicalReportRequest.getPhysioId() );
        medicalReport.setDate( medicalReportRequest.getDate() );
        medicalReport.setUserId( medicalReportRequest.getUserId() );
        medicalReport.setPresentingCondition( medicalReportRequest.getPresentingCondition() );
        medicalReport.setHxPresentingCondition( medicalReportRequest.getHxPresentingCondition() );
        medicalReport.setBodyChart( medicalReportRequest.getBodyChart() );
        medicalReport.setPainAssessment1( medicalReportRequest.getPainAssessment1() );
        medicalReport.setPainAssessment2( medicalReportRequest.getPainAssessment2() );
        medicalReport.setInvestigations( medicalReportRequest.getInvestigations() );
        medicalReport.setMedication( medicalReportRequest.getMedication() );
        medicalReport.setPreviousRx( medicalReportRequest.getPreviousRx() );
        medicalReport.setPmh( medicalReportRequest.getPmh() );
        List<String> list = medicalReportRequest.getRedFlags();
        if ( list != null ) {
            medicalReport.setRedFlags( new ArrayList<String>( list ) );
        }
        medicalReport.setPatientGoals( medicalReportRequest.getPatientGoals() );
        medicalReport.setPainSensitivity( medicalReportRequest.getPainSensitivity() );

        return medicalReport;
    }

    @Override
    public MedicalReportDto.MedicalReportResponse fromEntityToResponse(MedicalReport medicalReportEntity) {
        if ( medicalReportEntity == null ) {
            return null;
        }

        MedicalReportDto.MedicalReportResponse medicalReportResponse = new MedicalReportDto.MedicalReportResponse();

        medicalReportResponse.setPhysioId( medicalReportEntity.getPhysioId() );
        medicalReportResponse.setDate( medicalReportEntity.getDate() );
        medicalReportResponse.setId( medicalReportEntity.getId() );
        medicalReportResponse.setUserId( medicalReportEntity.getUserId() );
        medicalReportResponse.setPresentingCondition( medicalReportEntity.getPresentingCondition() );
        medicalReportResponse.setHxPresentingCondition( medicalReportEntity.getHxPresentingCondition() );
        medicalReportResponse.setBodyChart( medicalReportEntity.getBodyChart() );
        medicalReportResponse.setPainAssessment1( medicalReportEntity.getPainAssessment1() );
        medicalReportResponse.setPainAssessment2( medicalReportEntity.getPainAssessment2() );
        medicalReportResponse.setInvestigations( medicalReportEntity.getInvestigations() );
        medicalReportResponse.setMedication( medicalReportEntity.getMedication() );
        medicalReportResponse.setPreviousRx( medicalReportEntity.getPreviousRx() );
        medicalReportResponse.setPmh( medicalReportEntity.getPmh() );
        List<String> list = medicalReportEntity.getRedFlags();
        if ( list != null ) {
            medicalReportResponse.setRedFlags( new ArrayList<String>( list ) );
        }
        medicalReportResponse.setPatientGoals( medicalReportEntity.getPatientGoals() );
        medicalReportResponse.setPainSensitivity( medicalReportEntity.getPainSensitivity() );

        return medicalReportResponse;
    }
}
