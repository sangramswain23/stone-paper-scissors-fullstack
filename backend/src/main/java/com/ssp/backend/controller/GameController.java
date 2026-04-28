package com.ssp.backend.controller;

import com.ssp.backend.dto.ApiResponse;
import com.ssp.backend.dto.GameDTO;
import com.ssp.backend.entity.Game;
import com.ssp.backend.service.GameService;
import jakarta.validation.Valid;
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
    public ApiResponse<GameDTO> saveGame(@Valid @RequestBody GameDTO dto){
        GameDTO game=gameService.saveGame(dto);
        return new ApiResponse<>(
                "success", "Game saved successfully", game
        );
    }

    @GetMapping("/all")
    public ApiResponse<List<GameDTO>> getAllGames(){
        return new ApiResponse<>(
                "success", "game fetched successfully", gameService.getAllGames()
        );
    }
}
