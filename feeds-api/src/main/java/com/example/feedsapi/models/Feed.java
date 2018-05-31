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

  @Column(name = "USER_ID")
  private Long userId;

  @Column(name = "API_TABLE_NAME")
  private String params;

  @Column(name = "API_ID")
  private Long apiId;

}
