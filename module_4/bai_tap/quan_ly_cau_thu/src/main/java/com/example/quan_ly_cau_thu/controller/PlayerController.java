package com.example.quan_ly_cau_thu.controller;

import com.example.quan_ly_cau_thu.dto.PlayerDto;
import com.example.quan_ly_cau_thu.model.Player;
import com.example.quan_ly_cau_thu.model.Position;
import com.example.quan_ly_cau_thu.model.Team;
import com.example.quan_ly_cau_thu.service.IPlayerService;
import com.example.quan_ly_cau_thu.service.IPositionService;
import com.example.quan_ly_cau_thu.service.ITeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/players")
public class PlayerController {
    @Autowired
    private IPlayerService playerService;
    @Autowired
    private IPositionService positionService;
    @Autowired
    private ITeamService teamService;
    @GetMapping("")
    public String showPagePlayer(@RequestParam(defaultValue = "0",required = false) int page,
                                 @RequestParam(defaultValue = "",required = false) String nameSearch,
                                 Model model){
        Pageable pageable = PageRequest.of(page,5);
        Page<Player> players = playerService.findAllPlayer(pageable,nameSearch);
        model.addAttribute("players",players);
        return "list";
    }
    @PostMapping("/delete")
    public String deletedPlayer(@RequestParam int id){
        playerService.deletedPlayer(id);
        return "redirect:/players";
    }
    @GetMapping("/create")
    public String showFormCreatePlayer(Model model){
        List<Position> positionList = positionService.findAllPosition();
        List<Team> teamList = teamService.findAllTeam();
        model.addAttribute("playerDto",new PlayerDto());
        model.addAttribute("positionList",positionList);
        model.addAttribute("teamList",teamList);
        return "create";
    }
    @PostMapping("/create")
    public String createPlayer(){
        return "redirect:/players";
    }
}
