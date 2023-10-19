package com.example.quan_ly_cau_thu.controller;

import com.example.quan_ly_cau_thu.dto.PlayerDto;
import com.example.quan_ly_cau_thu.model.Player;
import com.example.quan_ly_cau_thu.model.Position;
import com.example.quan_ly_cau_thu.model.Team;
import com.example.quan_ly_cau_thu.service.IPlayerService;
import com.example.quan_ly_cau_thu.service.IPositionService;
import com.example.quan_ly_cau_thu.service.ITeamService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
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
    public String showPagePlayer(@RequestParam(defaultValue = "0", required = false) int page,
                                 @RequestParam(defaultValue = "", required = false) String nameSearch,
                                 Model model) {
        Pageable pageable = PageRequest.of(page, 5);
        Page<Player> players = playerService.findAllPlayer(pageable, nameSearch);
        model.addAttribute("players", players);
        return "list";
    }

    @PostMapping("/delete")
    public String deletedPlayer(@RequestParam int id,
                                RedirectAttributes redirectAttributes) {
        playerService.deletedPlayer(id);
        redirectAttributes.addFlashAttribute("success","Xóa thành công");
        return "redirect:/players";
    }

    @GetMapping("/create")
    public String showFormCreatePlayer(Model model) {
        List<Position> positionList = positionService.findAllPosition();
        List<Team> teamList = teamService.findAllTeam();
        model.addAttribute("playerDto", new PlayerDto());
        model.addAttribute("positionList", positionList);
        model.addAttribute("teamList", teamList);
        return "create";
    }

    @PostMapping("/create")
    public String createPlayer(@Valid @ModelAttribute PlayerDto playerDto,
                               BindingResult bindingResult,
                               RedirectAttributes redirectAttributes,
                               Model model) {
        new PlayerDto().validate(playerDto, bindingResult);
        if (bindingResult.hasErrors()) {
            List<Position> positionList = positionService.findAllPosition();
            List<Team> teamList = teamService.findAllTeam();
            model.addAttribute("positionList", positionList);
            model.addAttribute("teamList", teamList);
            return "create";
        }
        Player player = new Player();
        BeanUtils.copyProperties(playerDto, player);
        playerService.createPlayer(player);
        redirectAttributes.addFlashAttribute("success","Thêm mới thành công");
        return "redirect:/players";
    }
    @GetMapping("/detail")
    public String showDetailPlayer(@RequestParam int id,
                                   Model model){
        Player player = playerService.findById(id);
        model.addAttribute("player",player);
        return "detail";
    }
    @GetMapping("/update")
    public String showFormUpdatePlayer(Model model,
                                       @RequestParam int id) {
        Player player = playerService.findById(id);
        List<Position> positionList = positionService.findAllPosition();
        List<Team> teamList = teamService.findAllTeam();
        model.addAttribute("playerDto", player);
        model.addAttribute("positionList", positionList);
        model.addAttribute("teamList", teamList);
        return "edit";
    }

    @PostMapping("/update")
    public String updatePlayer(@Valid @ModelAttribute PlayerDto playerDto,
                               BindingResult bindingResult,
                               RedirectAttributes redirectAttributes,
                               Model model) {
        new PlayerDto().validate(playerDto, bindingResult);
        if (bindingResult.hasErrors()) {
            List<Position> positionList = positionService.findAllPosition();
            List<Team> teamList = teamService.findAllTeam();
            model.addAttribute("positionList", positionList);
            model.addAttribute("teamList", teamList);
            return "edit";
        }
        Player player = new Player();
        BeanUtils.copyProperties(playerDto, player);
        playerService.updatePlayer(player);
        redirectAttributes.addFlashAttribute("success","Cập nhật thành công");
        return "redirect:/players";
    }
}
