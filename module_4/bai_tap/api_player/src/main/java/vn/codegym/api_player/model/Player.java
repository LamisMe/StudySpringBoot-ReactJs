package vn.codegym.api_player.model;

import javax.persistence.*;

@Entity
@Table(name = "players")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(columnDefinition = "varchar(45)")
    private String idPlayer;
    @Column(columnDefinition = "varchar(45)")
    private String name;
    private String avatar;
    @Column(columnDefinition = "date")
    private String dateOfBirth;
    private int experience;
    @Column(columnDefinition = "int(1) default 0")
    private boolean status;
    @Column(columnDefinition = "int(1) default 0")
    private boolean isDeleted;
    @ManyToOne
    @JoinColumn(name = "position_id",referencedColumnName = "id")
    private Position position;
    @ManyToOne
    @JoinColumn(name = "team_id",referencedColumnName = "id")
    private Team team;

    public Player() {
    }

    public Player(Integer id, String idPlayer, String name, String avatar, String dateOfBirth, int experience, boolean status, boolean isDeleted, Position position, Team team) {
        this.id = id;
        this.idPlayer = idPlayer;
        this.name = name;
        this.avatar = avatar;
        this.dateOfBirth = dateOfBirth;
        this.experience = experience;
        this.status = status;
        this.isDeleted = isDeleted;
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

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
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
}
