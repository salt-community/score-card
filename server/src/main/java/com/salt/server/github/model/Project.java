package com.salt.server.github.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.salt.server.github.model.Github;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Getter
@Setter
@Entity
public class Project {
    @Id
    @UuidGenerator
    private UUID id;
    private String url;
    private int commit;
    private int issue;
    private int duration;
    private int performance;
    private int testCoverage;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "github_id",nullable = false)
    private Github github;


}
