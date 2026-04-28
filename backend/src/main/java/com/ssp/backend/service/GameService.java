package com.ssp.backend.service;

import com.ssp.backend.dto.GameDTO;
import com.ssp.backend.dto.RoundDTO;
import com.ssp.backend.entity.Game;
import com.ssp.backend.entity.Round;
import com.ssp.backend.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    public String getWinner(String p1, String p2){

        if(p1.equals(p2)) return "TIe";

        if((p1.equals("Stone") && p2.equals("Scissors")) ||
                (p1.equals("Paper") && p2.equals("Stone")) ||
                (p1.equals("Scissors") && p2.equals("paper"))
        ) return "Player1";
        return "Player2";
    }


    //Save Game
    public Game saveGame(GameDTO dto){

        Game game=new Game();
        game.setPlayer1(dto.getPlayer1());
        game.setPlayer2(dto.getPlayer2());
        game.setWinner(dto.getWinner());

        List<Round> rounds=dto.getRounds().stream().map(r->{
            Round round=new Round();
            round.setRoundNumber(r.getRoundNumber());
            round.setPlayer1Choice(r.getPlayer1Choice());
            round.setPlayer2Choice(r.getPlayer2Choice());
            round.setWinner(r.getWinner());
            round.setGame(game);
            return round;
        }).collect(Collectors.toList());

        game.setRounds(rounds);

        return gameRepository.save(game);
    }


    //Fetch games
    public List<GameDTO> getAllGames(){
        return gameRepository.findAll().stream().map(game -> {
            List<RoundDTO> roundDTOs=game.getRounds().stream().map(r ->
                new RoundDTO(r.getRoundNumber(),
                        r.getPlayer1Choice(),
                        r.getPlayer2Choice(),
                        r.getWinner())
            ).collect(Collectors.toList());

            return new GameDTO(
                    game.getPlayer1(),
                    game.getPlayer2(),
                    game.getWinner(),
                    roundDTOs
            );
        }).collect(Collectors.toList());
    }
}
