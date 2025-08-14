package com.ranab.CollabSphere.repository;

import com.ranab.CollabSphere.model.Project;
import com.ranab.CollabSphere.model.User;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {

//    @Bean
//    List<Project> findByOwner(User user);
    @Bean
    List<Project> findByNameContainingAndTeamContains(String name, User team);

//    @Bean
//    @Query("SELECT p From Project p join p.team t where t=:user")
//    List<Project> findProjectByTeam(@Param("user") User user);
    @Bean
    List<Project> findByTeamContainingOrOwner(User user, User owner);
}
