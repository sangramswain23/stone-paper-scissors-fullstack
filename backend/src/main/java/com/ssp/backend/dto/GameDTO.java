package com.ssp.backend.dto;

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

    private String player1;
    private String player2;

    private String winner;

    private List<RoundDTO> rounds;
}
