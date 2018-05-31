package com.example.apijobsapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "API_JOBS")
public class ApiJob {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "USER_ID")
  private Long userId;

  @Column(name = "AGENCIES")
  private String agencies;

  @Column(name = "POSTINGTYPE")
  private String postingType;

  @Column(name = "NUMBEROFPOSITIONS")
  private String numberOfPositions;

  @Column(name = "BUSINESSTITLE")
  private String businessTitle;

  @Column(name = "CIVILSERVICETITLE")
  private String civilServiceTitle;

  @Column(name = "QUERY")
  private String query;

  @Column(name = "TITLE")
  private String title;
}
