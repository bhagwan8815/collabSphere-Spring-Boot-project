//package com.ranab.CollabSphere.config;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.security.Keys;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.AuthorityUtils;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import javax.crypto.SecretKey;
//import java.io.IOException;
//import java.util.List;
//
//public class JwtTokenValidator extends OncePerRequestFilter {
//
//
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
//                                    FilterChain filterChain) throws ServletException, IOException {
//
//        // 👇 Debug print
//        System.out.println("Authorization Header:********************************************* " + request.getHeader("Authorization"));
//
//        String jwt = request.getHeader(JwtConstant.JWT_HEADER);
//
//        if (jwt != null && jwt.startsWith("Bearer ")) {
//            jwt = jwt.substring(7);
//
//            try {
//                SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());
//                System.out.println("JWT Secret key in spring boot+---------------------************: " + key);
//
//                Claims claims = Jwts.parserBuilder()
//                        .setSigningKey(key)
//                        .build()
//                        .parseClaimsJws(jwt)
//                        .getBody();
//
//                String email = String.valueOf(claims.get("email"));
//                String authorities = String.valueOf(claims.get("authorities"));
//                if (authorities == null || authorities.equals("null")) authorities = "";
//
//                List<GrantedAuthority> auths = AuthorityUtils.commaSeparatedStringToAuthorityList(authorities);
//                Authentication authentication = new UsernamePasswordAuthenticationToken(email, null, auths);
//                SecurityContextHolder.getContext().setAuthentication(authentication);
//
//                System.out.println("Token Received: " + jwt);
//
//            } catch (Exception e) {
//                System.out.println("JWT parse error: " + e.getMessage());
//                throw new BadCredentialsException("Invalid token ..........", e);
//            }
//        }
//
//        filterChain.doFilter(request, response);
//    }
//
//
//}
















package com.ranab.CollabSphere.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.util.List;

public class JwtTokenValidator extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {


    String jwt= request.getHeader(JwtConstant.JWT_HEADER);

        System.out.println("Authorization Header:********************************************* " + request.getHeader("Authorization"));

      //   Bearer jwt
        if(jwt !=null){
            jwt=jwt.substring(7);
            try{
                SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());
                Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();


                String email=String.valueOf(claims.get("email"));
                String authorities=String.valueOf(claims.get("authorities"));

                List<GrantedAuthority> auths = AuthorityUtils.commaSeparatedStringToAuthorityList(authorities);
                Authentication authentication = new UsernamePasswordAuthenticationToken(email,null,auths);
                SecurityContextHolder.getContext().setAuthentication(authentication);


            }catch (Exception e){
                throw new BadCredentialsException("Invalid token ..........");
            }
        }

        filterChain.doFilter(request,response);
    }
}
