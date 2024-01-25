package com.salt.server.score.api;

import com.salt.server.Account.model.Account;
import com.salt.server.Account.service.AccountService;
import com.salt.server.score.ScoreService;
import com.salt.server.score.api.dto.ScoreDto;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/scores")
public class ScoreController {

    private final ScoreService scoreService;

    public ScoreController(ScoreService scoreService) {
        this.scoreService = scoreService;
    }

    @GetMapping("/{accountId}")
    public ScoreDto.ScoreListResponse getScoreById(@PathVariable UUID accountId) {
        return scoreService.getAllScoreById(accountId);
    }

    @PostMapping("/{developerId}/add-score")
    public ScoreDto.Response addScoreById(@PathVariable UUID developerId, @RequestBody ScoreDto.Request request) {
        return scoreService.addScore(developerId, request);
    }

    @PostMapping("/{developerId}/add-scores")
    public List<ScoreDto.Response> addListScoresById(@PathVariable UUID developerId, @RequestBody List<ScoreDto.Request> request) {
        return scoreService.addListOfScores(developerId, request);
    }

    @DeleteMapping("/{scoreId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteScore (@PathVariable UUID scoreId) {
        scoreService.deleteScore(scoreId);
    }

}
