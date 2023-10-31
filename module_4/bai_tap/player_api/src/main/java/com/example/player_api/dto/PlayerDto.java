package com.example.player_api.dto;

import com.example.player_api.model.Position;
import com.example.player_api.model.Team;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class PlayerDto implements Validator {
    private Integer id;
    private String idPlayer;
    private String name;
    private String avatar;
    private String dateOfBirth;
    private int experience;
    private boolean status;
    private Position position;
    private Team team;

    public PlayerDto() {
    }

    public PlayerDto(Integer id, String idPlayer, String name, String avatar, String dateOfBirth, int experience, boolean status, Position position, Team team) {
        this.id = id;
        this.idPlayer = idPlayer;
        this.name = name;
        this.avatar = avatar;
        this.dateOfBirth = dateOfBirth;
        this.experience = experience;
        this.status = status;
        this.position = position;
        this.team = team;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getIdPlayer() {
        return idPlayer;
    }

    public void setIdPlayer(String idPlayer) {
        this.idPlayer = idPlayer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        PlayerDto playerDto = (PlayerDto) target;
        if(playerDto.getIdPlayer().equals("")){
            errors.rejectValue("idPlayer",null,"*Không được để trống");
        }
        if(playerDto.getName().equals("")){
            errors.rejectValue("name",null,"*Không được để trống");
        }
        if(playerDto.getExperience() <= 0){
            errors.rejectValue("experience",null,"*Không được để trống");
        }
        if(playerDto.getDateOfBirth().equals("")){
            errors.rejectValue("dateOfBirth",null,"*Không được để trống");
        }
        if(playerDto.getAvatar().isEmpty()){
            errors.rejectValue("avatar",null,"*Không được để trống");
        }
    }
}
