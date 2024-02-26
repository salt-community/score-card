package se.salt.server2.domain.developer.models;

import jakarta.persistence.*;
import lombok.*;
import se.salt.server2.domain.assignment.models.AssignmentCategory;
import se.salt.server2.domain.assignment.models.AssignmentEntity;

import java.text.DecimalFormat;
import java.util.List;
import java.util.UUID;

@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "developer")
public class DeveloperEntity {

    @Id
    @GeneratedValue
    UUID id;

    UUID accountId;

    String firstName;

    String LastName;

    String emailAddress;

    @Enumerated(EnumType.STRING)
    BootcampCourse bootcampCourse;

    int averageBackendScore;

    int averageFrontendScore;

    @OneToMany(mappedBy = "developer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AssignmentEntity> assignments;

    public void calculateBackendAverageScore() {
        if (assignments == null || assignments.isEmpty()) {
            averageBackendScore = 0;
        } else {
            averageBackendScore = (int) assignments.stream()
                    .filter(assignmentEntity -> assignmentEntity.getCategory() == AssignmentCategory.BACKEND)
                    .mapToDouble(AssignmentEntity::getScore)
                    .average()
                    .orElse(0);
        }
    }

    public void calculateFrontendAverageScore() {
        if (assignments == null || assignments.isEmpty()) {
            averageFrontendScore = 0;
        } else {
            averageFrontendScore = (int) assignments.stream()
                    .filter(assignmentEntity -> assignmentEntity.getCategory() == AssignmentCategory.FRONTEND)
                    .mapToDouble(AssignmentEntity::getScore)
                    .average()
                    .orElse(0);
        }
    }

}
