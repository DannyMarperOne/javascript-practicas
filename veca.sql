select rend.id_rendimiento as CODIGO,
n.nota_bascula  AS NOTA,
n.proveedor as Productor,
n.rejas as REJAS ,
n.fecha as 'Fecha Entrada' ,
rend.fecha_proceso as 'Fecha Proceso',
n.kilos_entrada   'Kilos',
concat(nal.hora_inicio, ' - ', rend.hora_fin_proceso) as 'Hora de Proceso',
isnull((n.devolucion_nal),0) as 'Devolucion',
n.kilos as 'Kilos Netos',
round(isnull(nal.podrido,0),2) as PODRIDO,
round(isnull(nal.terceras,0),2) as TERCERAS,
round(isnull(nal.torreon,0),2) as TORREON ,
round(isnull(rend.kilos_segundas,0),2) + round(isnull(desecho_rpc,0),2) + nal.limon_rama as 'Segundas Enceradas' ,
round(isnull(rend.torreon_encerado,0),2) + round(isnull(torreon_275,0),2) as 'Torreon Encerado' ,

round((isnull(nal.terceras,0) + isnull(rend.kilos_segundas,0) + isnull(desecho_rpc,0) + isnull(nal.limon_rama,0) + isnull(nal.torreon,0) + isnull(rend.torreon_encerado,0) + isnull(torreon_275,0) + isnull(nal.podrido,0) +
isnull(rend.diferencia, 0) + (((100-rend.metro_porcentaje_aprovechado)/100 )
*((rend.metro_rejas_175 +rend.metro_rejas_150) *26) ) ),2) as 'Nacional',

-- Verde--------------------------------------------------------------------------------------------------------------
isnull(round(rend.verde_250,0),0) as V_250,
isnull(round(rend.verde_230,0),0) as V_230,
isnull(round(rend.verde_200,0),0) as V_200,
isnull(round(rend.verde_175,0),0) as V_175,
isnull(round(rend.verde_150,0),0) as V_150,
isnull(round(rend.verde_110,0),0) as V_110,

concat(isnull(round((rend.verde_250/N.KILOS)*100,2),0),'%')as 'pv_250',
concat(isnull(round((rend.verde_230/N.KILOS)*100,2),0),'%')as 'pv_230',
concat(isnull(round((rend.verde_200/N.KILOS)*100,2),0),'%')as 'pv_200',
concat(isnull(round((rend.verde_175/N.KILOS)*100,2),0),'%')as 'pv_175',
concat(isnull(round((rend.verde_150/N.KILOS)*100,2),0),'%')as 'pv_150',
concat(isnull(round((rend.verde_110/N.KILOS)*100,2),0),'%')as 'pv_110',

round(isnull(rend.verde_250,0) + isnull(rend.verde_230,0) + isnull(rend.verde_200,0) + isnull(rend.verde_175,0) + isnull(rend.verde_150,0) + isnull(rend.verde_110,0),2) as 'Total Verde',

concat(round((((isnull(rend.verde_250,0) + isnull(rend.verde_230,0) + isnull(rend.verde_200,0) + isnull(rend.verde_175,0) + isnull(rend.verde_150,0) + isnull(rend.verde_110,0)) /n.kilos)*100),2),'%') as 't_p_v',

-- Empaque--------------------------------------------------------------------------------------------------------------

isnull(rend.empa_250,0) + isnull(rend.rpc_250,0) + isnull(rend.manual_250,0) as 'e_250',
isnull(rend.empa_230,0) + isnull(rend.rpc_230,0) + isnull(rend.manual_230,0) as 'e_230',
isnull(rend.empa_200,0) + isnull(rend.rpc_200) + isnull(rend.manual_200,0) as 'e_200',
isnull(rend.empa_175,0) + isnull(rend.rpc_175) + isnull(rend.manual_175,0) as 'e_175',
isnull(rend.empa_150,0) + isnull(rend.manual_150,0)  as 'e_150',
isnull(rend.empa_110,0) + isnull(rend.manual_110,0) as 'e_110',

isnull(rend.empa_250, 0) + isnull(rend.rpc_250, 0) + isnull(rend.manual_250,0) as 'e_250',
isnull(rend.empa_230, 0) + isnull(rend.rpc_230, 0) + isnull(rend.manual_230,0) as 'e_230',
isnull(rend.empa_200, 0) + isnull(rend.rpc_200, 0) + isnull(rend.manual_200,0) as 'e_200',
isnull(rend.empa_175, 0) + isnull(rend.rpc_175, 0) + isnull(rend.manual_175,0) as 'e_175',
isnull(rend.empa_150, 0) + isnull(rend.manual_150,0)  as 'e_150',
isnull(rend.empa_110, 0) + isnull(rend.manual_110,0) as 'e_110',

concat(isnull(round((((isnull(rend.empa_250,0) + nullif(rend.rpc_250,0) + nullif(rend.manual_250,0))/ N.KILOS)*100),2),0),'%') as' p_e_250',

concat(isnull(round((((rend.empa_230+rend.rpc_230+nullif(rend.manual_230,0))/ N.KILOS)*100),2),0),'%') as' p_e_230',
concat(isnull(round((((rend.empa_200+rend.rpc_200+nullif(rend.manual_200,0))/N.KILOS)*100),2),0),'%') as 'p_e_200',
concat(isnull(round(((((rend.empa_175+rend.rpc_175+nullif(rend.manual_175,0))/N.KILOS))*100),2),0),'%') as 'p_e_175',
concat(isnull(round(((rend.empa_150+nullif(rend.manual_150,0)/N.KILOS)*100),2),0),'%') as 'p_e_150',
concat(isnull(round(((rend.empa_110+nullif(rend.manual_110,0)/N.KILOS)*100),2),0),'%') as 'p_e_110',

round(isnull(rend.empa_250,0) + isnull(rend.empa_230,0) + isnull(rend.empa_200,0) + isnull(rend.empa_175,0) + isnull(rend.empa_150,0) + isnull(rend.empa_110,0) + isnull(rend.manual_250,0) + isnull(rend.manual_230,0) + isnull(rend.manual_200,0) + isnull(rend.manual_175,0) + isnull(rend.manual_150,0) + isnull(rend.manual_110, 0)
+ isnull(rend.metro_kilos_aprovechados,0) + isnull(rend.rpc_250,0) + isnull(rend.rpc_230,0) + isnull(rend.rpc_200,0) + isnull(rend.rpc_175,0),2) as 'T.Emp',

concat(round(((isnull(rend.empa_250,0) +isnull(rend.empa_230,0)+ isnull(rend.empa_200,0)+ isnull(rend.empa_175,0)+ isnull(rend.empa_150,0)+isnull(rend.empa_110,0)+ isnull(rend.rpc_250,0)+ isnull(rend.rpc_230,0) + isnull(rend.rpc_200,0)+isnull(rend.rpc_175)+
(isnull(rend.manual_250,0)+isnull(rend.manual_230,0)+isnull(rend.manual_200,0)+isnull(rend.manual_175,0)+isnull(rend.manual_150,0)+isnull(rend.manual_110,0))) /n.kilos) *100,2),'%') as 't_p_emp',


-- Segundas--------------------------------------------------------------------------------------------------------------

isnull(rend.seg_250,0) as S_250,
isnull(rend.seg_230,0) as S_230,
isnull(rend.seg_200,0) as S_200,
isnull(rend.seg_175,0) as S_175,
isnull(rend.seg_150,0) as S_150,
isnull(rend.seg_110,0) as S_110,

concat(isnull(round((nullif(rend.seg_250,0))/(N.KILOS )*100,2),0),'%') as ps_250,
concat(isnull(round((nullif(rend.seg_230,0))/(N.KILOS )*100,2),0),'%') as ps_230,
concat(isnull(round((nullif(rend.seg_200,0))/(N.KILOS )*100,2),0),'%') as ps_200,
concat(isnull(round((nullif(rend.seg_175,0))/(N.KILOS )*100,2),0),'%') as ps_175,
concat(isnull(round((nullif(rend.seg_150,0))/(N.KILOS )*100,2),0),'%') as ps_150,
concat(isnull(round((nullif(rend.seg_110,0))/(N.KILOS )*100,2),0),'%') as ps_110,

round((isnull(rend.seg_250,0) +isnull(rend.seg_230,0)+isnull(rend.seg_200,0)+isnull(rend.seg_175,0)+isnull(rend.seg_150,0)+isnull(rend.seg_110,0)),2) as 'Total_s',
concat(round((nullif (rend.seg_250,0) +nullif(rend.seg_230,0)+nullif(rend.seg_200,0)+nullif(rend.seg_175,0)+nullif(rend.seg_150,0)+nullif(rend.seg_110,0))/(n.kilos)*100 ,2),'%') as 't_p_s',

-- Calibres General------------------------------------------------------------------------------------------------------

concat(round(((isnull(rend.verde_250,0)+isnull(rend.empa_250,0)+rpc_250+ rend.seg_250+rend.manual_250)/n.kilos)*100,2),'%') as 'pg_250',
concat(round(((isnull(rend.verde_230,0)+isnull(rend.empa_230,0)+isnull(rend.seg_230,0)+isnull(rend.rpc_230,0)+isnull(rend.manual_230,0))/n.kilos)*100,2),'%') as 'pg_230',
concat(round(((isnull(rend.verde_200,0)+isnull(rend.empa_200,0)+isnull(rend.seg_200,0)+isnull(rend.rpc_200,0)+isnull(rend.manual_200,0))/n.kilos)*100,2),'%') as 'pg_200',
concat(round(((isnull(rend.verde_175,0)+isnull(rend.empa_175,0)+isnull(rend.seg_175,0)+isnull(rend.rpc_175,0)+isnull(rend.manual_175,0))/n.kilos)*100,2),'%') as 'pg_175',
concat(round(((isnull(rend.verde_150,0)+isnull(rend.empa_150,0)+isnull(rend.seg_150,0)+isnull(rend.manual_150,0))/n.kilos)*100,2),'%') as 'pg_150',
concat(round(((isnull(rend.verde_110,0)+isnull(rend.empa_110,0)+isnull(rend.seg_110,0)+isnull(rend.manual_110,0))/n.kilos)*100,2),'%') as 'pg_110',

concat(round(((
(isnull(rend.verde_250,0) + isnull(rend.verde_230,0)+isnull(rend.verde_200,0)+isnull(rend.verde_175,0)+isnull(rend.verde_150,0)+isnull(rend.verde_110))+
(isnull(rend.empa_250,0) +isnull(rend.empa_230,0)+isnull(rend.empa_200,0)+isnull(rend.empa_175,0)+isnull(rend.empa_150,0) +isnull(rend.empa_110,0))+
(isnull(rend.seg_250,0) +isnull(rend.seg_230,0)+isnull(rend.seg_200,0)+isnull(rend.seg_175,0)+isnull(rend.seg_150,0)+isnull(rend.seg_110,0)+isnull(rend.rpc_250,0)+isnull(rend.rpc_230,0)+isnull(rend.rpc_200,0)+isnull(rend.rpc_175,0) )+
(isnull(rend.manual_250,0)+isnull(rend.manual_230,0)+isnull(rend.manual_200,0)+isnull(rend.manual_175,0)+isnull(rend.manual_150,0)+isnull(rend.manual_110,0))
)/n.kilos)*100,2),'%') as 'total_calibres',

concat(isnull(round(( (nal.podrido /n.kilos) *100),3),0),'%') as 'p_podrido',
concat(round(((nal.terceras/n.kilos) *100),3),'%') as 'p_terceras' ,
concat(isnull(round(((nal.torreon /n.kilos) *100),3),0),'%') as 'p_torreon',
concat(isnull(round((((rend.kilos_segundas+rend.desecho_rpc+nal.limon_rama)/n.kilos) *100),3),0),'%') as 'segundas_enceradas',
concat(isnull(round((((rend.torreon_encerado+rend.torreon_275)/n.kilos) *100),3),0),'%') as 'p_torreon_encerado',

concat(round((isnull(nal.terceras,0)+(isnull(rend.kilos_segundas,0)+isnull(rend.desecho_rpc,0)+isnull(nal.limon_rama,0))+isnull(nal.torreon,0)+isnull(rend.torreon_encerado,0)+isnull(torreon_275,0)+isnull(nal.podrido,0)+(isnull(rend.diferencia,0))+
(((100-rend.metro_porcentaje_aprovechado)/100 ) 
*((rend.metro_rejas_175 +rend.metro_rejas_150) *26)))/isnull(n.kilos,0)*100 ,2),'%') as 't_p_nal',

isnull(round(rend.diferencia,2),0) as DIFERENCIA,
concat(isnull(round(((rend.diferencia /isnull(n.kilos,0)) *100),3),0),'%') as 'p_merma',

concat(round(((isnull(n.devolucion_nal,0)+
isnull(nal.terceras,0)+isnull(rend.kilos_segundas,0)+isnull(rend.desecho_rpc,0)+isnull(nal.limon_rama,0)+isnull(nal.torreon,0)+isnull(rend.torreon_encerado,0)+isnull(torreon_275,0)+isnull(nal.podrido,0)+
isnull(rend.seg_250,0)+isnull(rend.seg_230,0)+isnull(rend.seg_200,0)+isnull(rend.seg_175,0)+isnull(rend.seg_150,0)+isnull(rend.seg_110))/n.kilos_entrada )*100,2),' %')
as 'Total de kilos nal en porcentajes',

concat(round((((isnull(rend.empa_250,0) +isnull(rend.empa_230,0)+isnull(rend.empa_200,0)+isnull(rend.empa_175,0)+isnull(rend.empa_150,0)+isnull(rend.empa_110,0)+isnull(rend.rpc_250,0)+isnull(rend.rpc_230,0)+isnull(rend.rpc_200,0)+isnull(rend.rpc_175,0))/n.kilos)*100),0),'%') as  tpe_a,

rend.comentarios as COMENTARIOS ,
 rend.hora_fin_proceso as 'Hora '


from ticket_bascula as t inner join nota_bascula as n  on n.id_ticket=t.id_ticket 
left join inspeccion_20 as i on n.id_nota_bascula=i.id_nota_bascula
left join registros_nacionales as nal on nal.id_nota_bascula =n.id_nota_bascula 
left JOIN rendimiento_vpr AS REND on rend.id_nacionales =nal.id_nacionales
left join area_descarga as area on area.id_ticket=t.id_ticket