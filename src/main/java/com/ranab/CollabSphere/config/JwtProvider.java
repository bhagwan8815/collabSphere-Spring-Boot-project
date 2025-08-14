//package com.ranab.CollabSphere.config;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.security.Keys;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//
//import javax.crypto.SecretKey;
//import java.util.Date;
//import java.util.stream.Collectors;
//
//public class JwtProvider {
//
//    static SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());
//
//    public static String generateToken(Authentication auth) {
//        String authorities = auth.getAuthorities().stream()
//                .map(GrantedAuthority::getAuthority)
//                .collect(Collectors.joining(","));
//
//        return Jwts.builder()
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + 86400000))
//                .claim("email", auth.getName())
//                .claim("authorities", authorities)
//                .signWith(key)
//                .compact();
//    }
//
//    public static String getEmailFromToken(String jwt) {
//        jwt = jwt.substring(7); // Remove Bearer
//        Claims claims = Jwts.parserBuilder()
//                .setSigningKey(key)
//                .build()
//                .parseClaimsJws(jwt)
//                .getBody();
//        return String.valueOf(claims.get("email"));
//    }
//}







package com.ranab.CollabSphere.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;

import javax.crypto.SecretKey;
import java.util.Date;

public class JwtProvider {

    static SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());

    public static String generateToken(Authentication auth){
        String jwt = Jwts.builder().setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime()+86400000))
                .claim("email",auth.getName())
                .signWith(key)
                .compact();

        return jwt;

    }
    public static String getEmailFromToken(String jwt){
        jwt = jwt.substring(7);
        Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
        return String.valueOf(claims.get("email"));
    }



}
