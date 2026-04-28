package com.ssp.backend.dto;


import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoundDTO {

    @Min(value = 1, message = "Round number must be >=1")
    private int roundNumber;

    @NotBlank(message = "Player1 choice must required")
    private String player1Choice;

    @NotBlank(message = "Player2 choice must required")
    private String player2Choice;

    private String winner;
}
