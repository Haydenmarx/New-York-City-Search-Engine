package com.example.feedsapi.models;

import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "FEEDS")
public class Feed {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "URL")
  private String url;

  @Column(name = "PARAMS")
  private String params;

}
