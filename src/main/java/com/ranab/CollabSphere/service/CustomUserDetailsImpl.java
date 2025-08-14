package com.ranab.CollabSphere.service;

import com.ranab.CollabSphere.model.User;
import com.ranab.CollabSphere.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class CustomUserDetailsImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + username);
        }

        // If your User model has a role field (like "ROLE_USER", "ROLE_ADMIN"), use it:
        // String role = user.getRole();
        // List<GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority(role));

        // If roles are not yet implemented, just give a default role:
        List<GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority("ROLE_USER"));

        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                authorities
        );
    }
}







//package com.ranab.CollabSphere.service;
//
//import com.ranab.CollabSphere.model.User;
//import com.ranab.CollabSphere.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class CustomUserDetailsImpl implements UserDetailsService {
//
//    @Autowired
//    private UserRepository userRepository;
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByEmail(username);
//
//        if(user==null){
//            throw new UsernameNotFoundException("User not found with email :"+ username);
//        }
//        List<GrantedAuthority> authorities = new ArrayList<>();
//
//        return new org.springframework.security.core.userdetails.User(user.getEmail(),
//                user.getPassword(),authorities);
//    }
//
//}
