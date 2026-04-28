package com.ssp.backend.controller;

import com.ssp.backend.dto.GameDTO;
import com.ssp.backend.entity.Game;
import com.ssp.backend.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/game")
@CrossOrigin
public class GameController {

    @Autowired
    private GameService gameService;


    @PostMapping("/save")
    public Game saveGame(@RequestBody GameDTO dto){
        return gameService.saveGame(dto);
    }

    @GetMapping("/all")
    public List<GameDTO> getAllGames(){
        return gameService.getAllGames();
    }
}
