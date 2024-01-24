package com.salt.server.Account.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.salt.server.score.Score;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity
public class Account {
    @Id
    @UuidGenerator
    private UUID id;
    private String email;
    @JsonIgnore
    @OneToOne( fetch = FetchType.LAZY)
    @JoinColumn(name = "userDetail_id", referencedColumnName = "id")
    private UserDetail userDetail;
    @JsonIgnore
    @OneToMany(mappedBy = "account")
    private List<Score> scores = new ArrayList<>();

    public void addScore(Score score) {
        this.scores.add(score);
    }
}
