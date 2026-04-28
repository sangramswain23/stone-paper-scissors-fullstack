package com.ssp.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GameDTO {

    @NotBlank(message = "Player1 name is required")
    private String player1;

    @NotBlank(message = "Player2 name is required")
    private String player2;

    private String winner;

    @NotNull(message = "Rounds can not be null")
    @Size(min=1, max = 6, message = "Game must have 1 to 6 rounds")
    private List<RoundDTO> rounds;
}
