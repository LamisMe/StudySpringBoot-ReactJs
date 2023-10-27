package com.example.quan_ly_cau_thu.dto;

import java.util.*;

public class LikePlayerDto {
    private Set<PlayerDto> playerDtoSet = new HashSet<>();

    public LikePlayerDto(){
    }

    public Set<PlayerDto> getPlayerDtoSet() {
        return playerDtoSet;
    }

    public void setPlayerDtoSet(Set<PlayerDto> playerDtoSet) {
        this.playerDtoSet = playerDtoSet;
    }

    public void addLikePlayer(PlayerDto playerDto){
        playerDtoSet.add(playerDto);
    }
}
