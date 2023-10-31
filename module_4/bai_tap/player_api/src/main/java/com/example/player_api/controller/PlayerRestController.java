package com.example.player_api.controller;

import com.example.player_api.dto.PlayerDto;
import com.example.player_api.model.Player;
import com.example.player_api.service.IPlayerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/players")
public class PlayerRestController {
    @Autowired
    private IPlayerService playerService;
    @GetMapping("")
    public ResponseEntity<List<Player>> getAllPlayer(){
        List<Player> playerList = playerService.findAll();
        if(playerList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(playerList,HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Player> showDetailPlayer(@PathVariable int id){
        Player player = playerService.findById(id);
        if (player == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(player,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> createPlayer(@RequestBody PlayerDto playerDto){
        if (playerDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Player player = new Player();
        BeanUtils.copyProperties(playerDto,player);
        playerService.add(player);
        return new ResponseEntity<>(player,HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePlayer(@PathVariable int id,
                                          @RequestBody PlayerDto playerDto){
        Player player = playerService.findById(id);
        if (player == null){
            return new  ResponseEntity<Player>(HttpStatus.NOT_FOUND);
        }
        if (playerDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        BeanUtils.copyProperties(playerDto,player);
        playerService.update(player);
        return new ResponseEntity<>(player,HttpStatus.OK);
    }
}