package com.salt.server.assignment;

import com.salt.server.assignment.model.Assignment;
import com.salt.server.assignment.repository.AssignmentRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
class AssignmentServiceTest {

    @Mock
    private AssignmentRepository assignmentRepository;

    @InjectMocks
    private AssignmentService assignmentService;

    @Test
    void shouldReturnListOfAllAssignments() {
        Assignment assignment1 = new Assignment();
        Assignment assignment2 = new Assignment();
        when(assignmentRepository.findAll()).thenReturn(List.of(assignment1, assignment2));
        assertThat(assignmentService.getAllTest()).containsExactly(assignment1, assignment2);
    }

}