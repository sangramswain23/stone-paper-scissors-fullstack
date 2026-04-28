package com.ssp.backend.dto;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoundDTO {

    private int roundNumber;
    private String player1Choice;
    private String player2Choice;
    private String winner;
}
